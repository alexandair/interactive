// Copyright (c) .NET Foundation and contributors. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { expect } from 'chai';

import { processArguments } from '../../utilities';

describe('Miscellaneous tests', () => {
    it(`verify command and argument replacement is as expected`, () => {
        let template = {
            args: [
                '{dotnet_path}',
                'tool',
                'run',
                'dotnet-interactive',
                '--',
                'stdio'
            ],
            workingDirectory: '{global_storage_path}'
        };
        let actual = processArguments(template, 'replacement-dotnet-path', 'replacement-global-storage-path');
        expect(actual).to.deep.equal({
            command: 'replacement-dotnet-path',
            args: [
                'tool',
                'run',
                'dotnet-interactive',
                '--',
                'stdio'
            ],
            workingDirectory: 'replacement-global-storage-path'
        });
    });
});
