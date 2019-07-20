/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import metadata from './block.json';
import edit from './edit';
import icon from './icon';

const { name } = metadata;

export { metadata, name };

export const settings = {
	title: __( 'Post Title' ),
	edit,
	icon,
};
