/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

const MY_TEMPLATE = [
    [ 'core/columns', {}, [
        [ 'core/column', { width: '50%' }, [
            [ 'core/heading', { placeholder: 'Title' } ],
            [ 'core/paragraph', { placeholder: 'Text' } ],
			[ 'core/button', { text: 'Click me' } ], 
        ]],
        [ 'core/column', { width: '50%' }, [
            [ 'core/image', {} ],
        ]],
    ]],
];

registerBlockType( metadata.name, {

	
    // ...

    edit: () => {
        const blockProps = useBlockProps();

        return (
            <div { ...blockProps }>
                <InnerBlocks template={MY_TEMPLATE} allowedBlocks={['core/paragraph']}  />
            </div>
        );
    },

    save: () => {
        const blockProps = useBlockProps.save();

        return (
            <div { ...blockProps }>
                <InnerBlocks.Content />
            </div>
        );
    },
} );
