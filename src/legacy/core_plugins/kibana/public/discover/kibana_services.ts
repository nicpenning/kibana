/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { DiscoverServices } from './build_services';

let angularModule: any = null;
let services: DiscoverServices | null = null;

/**
 * set bootstrapped inner angular module
 */
export function setAngularModule(module: any) {
  angularModule = module;
}

/**
 * get boostrapped inner angular module
 */
export function getAngularModule() {
  return angularModule;
}

export function getServices(): DiscoverServices {
  if (!services) {
    throw new Error('Discover services are not yet available');
  }
  return services;
}

export function setServices(newServices: any) {
  services = newServices;
}

export const [getUrlTracker, setUrlTracker] = createGetterSetter<{
  setTrackedUrl: (url: string) => void;
}>('urlTracker');

// EXPORT legacy static dependencies, should be migrated when available in a new version;
export { wrapInI18nContext } from 'ui/i18n';
import { search } from '../../../../../plugins/data/public';
import { createGetterSetter } from '../../../../../plugins/kibana_utils/common';
export const { getRequestInspectorStats, getResponseInspectorStats, tabifyAggResponse } = search;
export {
  unhashUrl,
  redirectWhenMissing,
  ensureDefaultIndexPattern,
} from '../../../../../plugins/kibana_utils/public';
export {
  formatMsg,
  formatStack,
  subscribeWithScope,
} from '../../../../../plugins/kibana_legacy/public';

// EXPORT types
export {
  IndexPatternsContract,
  IIndexPattern,
  IndexPattern,
  indexPatterns,
  IFieldType,
  SearchSource,
  ISearchSource,
  EsQuerySortValue,
  SortDirection,
} from '../../../../../plugins/data/public';
// @ts-ignore
export { buildPointSeriesData } from 'ui/agg_response/point_series/point_series';
