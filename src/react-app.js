var simpleRender = React.createClass(
	{
		displayName: 'simpleRender',
		render: function() {
			return React.DOM.div(null, "Rendering with ReactJS - ", this.props.framework);
		}
	}
);

var tableRender = React.createClass(
	{
		displayName: 'tableRender',
		render: function() {
			var data = this.props.data;

			var rows = data.map(function (datum) {
				var clickHandler = function (ev) {
					console.log("Still in reactJs");
					console.log(ev);
				};

				return (
					React.DOM.tr(
						{ 
							onClick: clickHandler,
							key: datum.key
						},
						React.DOM.td(null, datum['0']),
						React.DOM.td(null, datum['1']),
						React.DOM.td(null, datum['2']),
						React.DOM.td(null, datum['3']),
						React.DOM.td(null, datum['4'])
					)
				);
			});

			return (
				React.DOM.table(null, rows)
			);
		}
	}
);