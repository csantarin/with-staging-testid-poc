/**
 * Retrieves the name of the component. Useful for labeling higher-order components in the debugger.
 *
 * @param {React.ComponentType<any>} Component The component `function` or `class`.
 * @returns {string} The display name of the component.
 */
const getComponentDisplayName = (Component: React.ComponentType<{}>): string => {
	return (
		Component.displayName ||
		Component.name ||
		'Component'
	);
};

export default getComponentDisplayName;
