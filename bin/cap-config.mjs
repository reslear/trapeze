#!/usr/bin/env node
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict";

process.on("unhandledRejection", (err) => {
  throw err;
});

import { run } from "../cli/index.mjs";

run();