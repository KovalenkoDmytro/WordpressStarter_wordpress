import { useBlockProps } from '@wordpress/block-editor';
import {__} from "@wordpress/i18n";

export default function Save() {
	const blockProps = useBlockProps.save();
	return <h1 {...blockProps}>{__('Save block')}</h1>;
}
