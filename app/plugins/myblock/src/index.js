import { registerBlockType } from '@wordpress/blocks';
import './style/style.scss';
import Edit from './js/edit';
import Save from './js/save';

registerBlockType('genius/myblock', {
	edit: Edit,
	save: Save,
});
