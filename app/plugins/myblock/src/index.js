import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';
import "./style.scss";
import "./editor.scss";

registerBlockType( 'genius/myblock', {
	edit: function () {
		const blockProps = useBlockProps();
		return <h1 {...blockProps}>Edit 6</h1>;
	},
	save: function () {
		const blockProps = useBlockProps.save();
		return <h1 {...blockProps}>Save 2</h1>;
	},
} );
