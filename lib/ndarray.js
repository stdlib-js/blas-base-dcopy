/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// VARIABLES //

var M = 8;


// MAIN //

/**
* Copies values from `x` into `y`.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {Float64Array} x - input array
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting `x` index
* @param {Float64Array} y - output array
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - starting `y` index
* @returns {Float64Array} output array
*
* @example
* var Float64Array = require( '@stdlib/array-float64' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float64Array( [ 6.0, 7.0, 8.0, 9.0, 10.0 ] );
*
* dcopy( x.length, x, 1, 0, y, 1, 0 );
* // y => <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
*/
function dcopy( N, x, strideX, offsetX, y, strideY, offsetY ) {
	var ix;
	var iy;
	var m;
	var i;
	if ( N <= 0 ) {
		return y;
	}
	ix = offsetX;
	iy = offsetY;

	// Use unrolled loops if both strides are equal to `1`...
	if ( strideX === 1 && strideY === 1 ) {
		m = N % M;

		// If we have a remainder, run a clean-up loop...
		if ( m > 0 ) {
			for ( i = 0; i < m; i++ ) {
				y[ iy ] = x[ ix ];
				ix += strideX;
				iy += strideY;
			}
		}
		if ( N < M ) {
			return y;
		}
		for ( i = m; i < N; i += M ) {
			y[ iy ] = x[ ix ];
			y[ iy+1 ] = x[ ix+1 ];
			y[ iy+2 ] = x[ ix+2 ];
			y[ iy+3 ] = x[ ix+3 ];
			y[ iy+4 ] = x[ ix+4 ];
			y[ iy+5 ] = x[ ix+5 ];
			y[ iy+6 ] = x[ ix+6 ];
			y[ iy+7 ] = x[ ix+7 ];
			ix += M;
			iy += M;
		}
		return y;
	}
	for ( i = 0; i < N; i++ ) {
		y[ iy ] = x[ ix ];
		ix += strideX;
		iy += strideY;
	}
	return y;
}


// EXPORTS //

module.exports = dcopy;
