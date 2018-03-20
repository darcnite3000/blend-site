<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'i3468600_wp1');

/** MySQL database username */
define('DB_USER', 'i3468600_wp1');

/** MySQL database password */
define('DB_PASSWORD', 'H(iCwY(N7k]F(K~SL4.95(.3');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'i1GZf1LJ2rBdmA3xOKcap4JF4DjAeJjvmzHNnrHVVuP7tHWvtDWaUvHYaa2kfPqU');
define('SECURE_AUTH_KEY',  'kP51OTLlL09YKwHed39nSLLLVOlExEqkHpdVdjaUGyOc5CgWy2gUwGQvZN3uKWRx');
define('LOGGED_IN_KEY',    '8WaNBgaqEQKEHESFXS6xgnFhdTv9jMOSD1aI8l5LZyitUxCvEy72DUFC7etooFdU');
define('NONCE_KEY',        '65OniwpgKS2FUoIV2dZ41j7Ys68v0tntmIpP2Dny6IAtXZHdWp4qONLKRe9RiE8r');
define('AUTH_SALT',        'VgdDAiWWRQyfMTHa8aGbme7KgFwl5ZGEKf8T8iBwMuix5EgxKDNXx2kypLKBmfwV');
define('SECURE_AUTH_SALT', 'KoHHqMNfWU5YFWrYpVRm7FpkBca49Iurei7pzyih0VWQKPY6VfRD1ZJ3kkA86u75');
define('LOGGED_IN_SALT',   'jmsPYmQPuXedJhKx7OJXtOnZfrjDSRrxH6HTqRiBFnbPpOysM4Kw9oMVL8UKZtkK');
define('NONCE_SALT',       'HMuGQ9XvlFMfT595gkZabQpfh8ZZi0pf7oi9mknBnmvU321JUZvnLMzcRpYHnPSO');

/**
 * Other customizations.
 */
define('FS_METHOD','direct');define('FS_CHMOD_DIR',0755);define('FS_CHMOD_FILE',0644);
define('WP_TEMP_DIR',dirname(__FILE__).'/wp-content/uploads');

/**
 * Turn off automatic updates since these are managed upstream.
 */
define('AUTOMATIC_UPDATER_DISABLED', true);


/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
