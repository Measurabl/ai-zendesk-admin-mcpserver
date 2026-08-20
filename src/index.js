#!/usr/bin/env node
    // Load .env before any other module reads process.env (imports are hoisted,
    // so this must be the first import, not a dotenv.config() call further down)
    import 'dotenv/config';
    import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
    import { server } from './server.js';

    // stdout is reserved for the MCP stdio protocol — log to stderr only
    console.error('Starting Zendesk API MCP server...');

    // Start receiving messages on stdin and sending messages on stdout
    const transport = new StdioServerTransport();
    await server.connect(transport);
