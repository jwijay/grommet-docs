// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React from 'react';
import Anchor from 'grommet/components/Anchor';
import ExamplesDoc from '../../../components/ExamplesDoc';

import SearchInput1 from './SearchInput1';
import SearchInput2 from './SearchInput2';

export default class SearchInputExamplesDoc extends ExamplesDoc {};

SearchInputExamplesDoc.defaultProps = {
  context: <Anchor path="/docs/search-input">SearchInput</Anchor>,
  examples: [
    { label: 'Simple', component: SearchInput1 },
    { label: 'Rich Suggestions', component: SearchInput2 }
  ],
  title: 'Examples'
};
