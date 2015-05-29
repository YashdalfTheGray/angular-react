var aReactComp = React.createClass(
	{
		displayName:'aReactComp',
		render:function() {
			return React.DOM.div(null, "Rendering with ReactJS - ", this.props.framework);
		}
	}
);