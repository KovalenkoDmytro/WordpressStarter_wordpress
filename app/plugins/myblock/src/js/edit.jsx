import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import '../style/editor.scss';

export default function Edit() {
	const blockProps = useBlockProps();
	return <h1 {...blockProps}> {__('Edit block')}</h1>;
}
