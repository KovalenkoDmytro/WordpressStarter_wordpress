import { useBlockProps } from '@wordpress/block-editor';
import {__} from "@wordpress/i18n";

export default function Save() {
	const blockProps = useBlockProps.save();
	return <p {...blockProps}>{__('Save block')}</p>;
}

