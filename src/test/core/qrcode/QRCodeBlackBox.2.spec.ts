/*
 * Copyright 2008 ZXing authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*package com.google.zxing.qrcode;*/

import 'mocha';

import BarcodeFormat from './../../../core/BarcodeFormat';
import MultiFormatReader from './../../../core/MultiFormatReader';
import AbstractBlackBoxSpec from './../common/AbstractBlackBox';

/**
 * @author Sean Owen
 */
export default class QRCodeBlackBox2Spec extends AbstractBlackBoxSpec {

    public constructor() {
        super('src/test/core/resources/blackbox/qrcode-2', new MultiFormatReader(), BarcodeFormat.QR_CODE);
        this.addTest(31, 31, 0.0);
        this.addTest(29, 29, 90.0);
        this.addTest(30, 30, 180.0);
        this.addTest(29, 29, 270.0);
    }

}


describe('QRCodeBlackBox.2', () => {
    it('testBlackBox', (done) => {
        const test = new QRCodeBlackBox2Spec();

        return test.testBlackBox(() => {
            done();
        });
    });
});
