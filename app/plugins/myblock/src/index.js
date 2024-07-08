import { registerBlockType } from '@wordpress/blocks';
import './style/style.scss';
import Edit from './js/edit.jsx';
import Save from './js/save.jsx';

registerBlockType('genius/myblock', {
	edit: Edit,
	save: Save,
});
