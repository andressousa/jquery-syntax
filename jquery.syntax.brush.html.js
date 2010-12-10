// brush: "html" aliases: []

//	This file is part of the "jQuery.Syntax" project, and is licensed under the GNU AGPLv3.
//	Copyright 2010 Samuel Williams. All rights reserved.
//	See <jquery.syntax.js> for licensing details.

Syntax.brushes.dependency('html', 'xml');
Syntax.brushes.dependency('html', 'javascript');
Syntax.brushes.dependency('html', 'css');
Syntax.brushes.dependency('html', 'php-script');
Syntax.brushes.dependency('html', 'ruby');

Syntax.register('html', function(brush) {
	brush.derives('xml');
	
	brush.push({
		pattern: /<script.*?type\=.?text\/javascript.*?>((.|\n)*?)<\/script>/gmi,
		matches: Syntax.extractMatches({brush: 'javascript'})
	});
	
	brush.push({
		pattern: /<style.*?type=.?text\/css.*?>((.|\n)*?)<\/style>/gmi,
		matches: Syntax.extractMatches({brush: 'css'})
	});
	
	brush.push({
		pattern: /(<\?php)((.|\n)*?)(\?>)/gm,
		matches: Syntax.extractMatches({klass: 'operator'}, {brush: 'php-script'}, null, {klass: 'operator'})
	});
	
	brush.push({
		pattern: /(<\?rb?)((.|\n)*?)(\?>)/gm,
		matches: Syntax.extractMatches({klass: 'operator'}, {brush: 'ruby'}, null, {klass: 'operator'})
	});
	
	brush.push({
		pattern: /<%=?(.*?)(%>)/g,
		klass: 'instruction',
		allow: ['string']
	});
	
	brush.push({
		pattern: /<(\!DOCTYPE(.*?))>/g,
		matches: Syntax.extractMatches({klass: 'doctype'})
	});
});

