import { useBlockProps } from '@wordpress/block-editor';
import "../style/editor.scss";

export default function Edit() {
    const blockProps = useBlockProps();
    return <h1 {...blockProps}>Edit 6</h1>;
}
