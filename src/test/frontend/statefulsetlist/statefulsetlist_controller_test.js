// Copyright 2015 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {StatefulSetListController} from 'statefulsetlist/statefulsetlist_controller';
import statefulSetListModule from 'statefulsetlist/statefulsetlist_module';

describe('Stateful Set list controller', () => {
  /** @type {!statefulsetlist/statefulsetlist_controller.StatefulSetListController} */
  let ctrl;

  beforeEach(() => {
    angular.mock.module(statefulSetListModule.name);

    angular.mock.inject(($controller) => {
      ctrl = $controller(StatefulSetListController, {statefulSetList: {statefulSets: []}});
    });
  });

  it('should initialize stateful set controller', angular.mock.inject(($controller) => {
    let ctrls = {};
    /** @type {!StatefulSetListController} */
    let ctrl = $controller(StatefulSetListController, {statefulSetList: {statefulSets: ctrls}});

    expect(ctrl.statefulSetList.statefulSets).toBe(ctrls);
  }));

  it('should show zero state', () => {
    expect(ctrl.shouldShowZeroState()).toBeTruthy();
  });

  it('should hide zero state', () => {
    // given
    ctrl.statefulSetList = {statefulSets: ['mock']};

    // then
    expect(ctrl.shouldShowZeroState()).toBeFalsy();
  });
});