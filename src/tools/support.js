export const supportTools = [
      // This is a placeholder for additional Support-specific tools
      // Most Support functionality is covered by the other tool modules
      {
        name: "support_info",
        description: "Get information about Zendesk Support configuration",
        schema: {},
        handler: async () => {
          // This would typically call an endpoint like /api/v2/account/settings
          // For now, we'll return a placeholder message
          return {
            content: [{
              type: "text",
              text: "Zendesk Support information would be displayed here. This is a placeholder for future implementation."
            }]
          };
        }
      }
    ];
