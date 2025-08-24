(function boot() {
  function ready() {
    const { hooks, element } = window.wp || {};
    if (!hooks || !element) return setTimeout(ready, 150);

    const { addFilter } = hooks;
    const { createElement } = element;

    addFilter(
      'editor.BlockListBlock',
      'your-namespace/force-uk-active',
      (BlockListBlock) => {
        return (props) => {
          if (props?.name === 'uikit-editor-blocks/switcher-item') {
            const className = [props.className, 'uk-active'].filter(Boolean).join(' ');
            return createElement(BlockListBlock, { ...props, className });
          }
          return createElement(BlockListBlock, props);
        };
      }
    );
  }

  ready();
})();
