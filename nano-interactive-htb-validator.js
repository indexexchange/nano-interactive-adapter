'use strict';

////////////////////////////////////////////////////////////////////////////////
// Dependencies ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

var Inspector = require('../../../libs/external/schema-inspector.js');

////////////////////////////////////////////////////////////////////////////////
// Main ////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function partnerValidator(configs) {
    var result = Inspector.validate({
        type: 'object',
        properties: {
            xSlots: {
                type: 'object',
                properties: {
                    '*': {
                        type: 'object',
                        properties: {
                            pid: {
                                type: 'string',
                                minLength: 1
                            }
                        }
                    }
                }
            }
        }
    }, configs);

    if (!result.valid) {
        return result.format();
    }

    return null;
}

module.exports = partnerValidator;
