/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { FtrProviderContext } from '../../ftr_provider_context';

export default function({ getService, loadTestFile }: FtrProviderContext) {
  const ml = getService('ml');

  // ML tests need to be disabled in orde to get the ES snapshot with
  // https://github.com/elastic/elasticsearch/pull/54713 promoted
  // and should be re-enabled as part of https://github.com/elastic/kibana/pull/61980
  describe.skip('Machine Learning', function() {
    this.tags(['mlqa']);

    before(async () => {
      await ml.securityCommon.createMlRoles();
      await ml.securityCommon.createMlUsers();
    });

    after(async () => {
      await ml.securityCommon.cleanMlUsers();
      await ml.securityCommon.cleanMlRoles();
    });

    loadTestFile(require.resolve('./bucket_span_estimator'));
    loadTestFile(require.resolve('./calculate_model_memory_limit'));
    loadTestFile(require.resolve('./categorization_field_examples'));
    loadTestFile(require.resolve('./get_module'));
    loadTestFile(require.resolve('./recognize_module'));
    loadTestFile(require.resolve('./setup_module'));
  });
}
