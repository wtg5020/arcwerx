# Claude AI Assistant

This document describes the role of Claude AI in the development of the ArcWerx website.

## What is Claude?

Claude is an AI assistant created by Anthropic. It's designed to help with a wide range of tasks including software development, code review, debugging, and technical documentation.

## Claude's Contributions to ArcWerx

Claude has assisted with several key features and improvements to this project:

### Accessibility & Theme Support
- **Dark Mode Implementation**: Added a comprehensive dark mode with theme toggle functionality
- **Section 508 Compliance**: Ensured the light mode meets Section 508 accessibility standards for government websites
- **Theme Switching**: Implemented smooth transitions between light and dark themes

### User Experience Enhancements
- **Dynamic TARGET LOCKED Indicator**: Modified the targeting system to follow the cursor for improved interactivity
- **HUD Refinements**: Removed static HUD elements to create a cleaner, more focused interface
- **Retro Aesthetic Preservation**: Maintained the authentic F-16 HUD-inspired design throughout all changes

## Working with Claude on This Project

### Best Practices

When collaborating with Claude on ArcWerx development:

1. **Preserve the Retro Aesthetic**: The F-16 HUD theme with phosphor green and CRT effects is central to this project's identity
2. **Maintain Accessibility**: All features should meet Section 508 compliance standards
3. **Keep It Performant**: Leverage Vite's fast build system and avoid unnecessary dependencies
4. **Type Safety First**: Use TypeScript's type system to catch errors early
5. **Test Responsiveness**: Ensure all features work on both desktop and mobile devices

### Useful Context for Claude

When asking Claude for help with this project, provide:

- **Component Context**: Which component you're working on (HUD elements, theme toggle, etc.)
- **Design Requirements**: Any specific retro/military aesthetic requirements
- **Accessibility Needs**: Section 508 compliance considerations
- **Performance Goals**: Build size or rendering performance targets

### Example Prompts

Good ways to request help from Claude:

```
"Add a new HUD element that displays mission time in the top-right corner,
maintaining the phosphor green aesthetic and ensuring it's accessible"

"Optimize the CRT scanline effect for better performance on mobile devices"

"Review this component for Section 508 compliance and suggest improvements"

"Help me implement a retro-style data visualization that fits the F-16 HUD theme"
```

## Technical Guidelines

### Code Style
- Follow TypeScript strict mode conventions
- Use functional React components with hooks
- Keep CSS organized with clear variable naming
- Maintain the existing color scheme defined in CSS custom properties

### Testing
- Test across different screen sizes
- Verify accessibility with screen readers
- Check color contrast ratios for compliance
- Validate CRT effects render correctly

### Documentation
- Update README.md for new features
- Document component props with TypeScript types
- Add comments for complex CSS effects
- Keep this Claude.md updated with new contributions

## Version History

- **2024-2025**: Initial dark mode and accessibility improvements
- **2024-2025**: Dynamic cursor-following TARGET LOCKED indicator
- **2026-01**: Documentation of Claude's involvement (this file)

## Questions or Issues?

If you encounter any issues with Claude-generated code or have suggestions for improvements, please open a GitHub issue with the label `claude-ai` for tracking.
