/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.*
 */

'use strict';

const MedisanaKS250Adapter = require('./medisana-ks250-adapter');

module.exports =
    // eslint-disable-next-line max-len
    (addonManager, manifest) => new MedisanaKS250Adapter(addonManager, manifest);
