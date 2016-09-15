// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Label from 'grommet/components/Label';
import Header from 'grommet/components/Header';
import DocsArticle from '../../components/DocsArticle';
import NavAnchor from '../../components/NavAnchor';

export default class Sizing extends Component {
  render () {
    return (
      <DocsArticle title="Sizing" colorIndex="neutral-2">

        <section>
          <p>Grommet uses T-shirt sizing concepts for both layout and
            typography.</p>
        </section>

        <section>
          <h2>General Layout</h2>
          <p>Components
          like <NavAnchor path="/docs/box">
          Box</NavAnchor>, <NavAnchor path="/docs/meter">
          Meter</NavAnchor>, and <NavAnchor path="/docs/chart">
          Chart</NavAnchor> use
          sizes for width stops as illustrated
          below.</p>

          <Box pad={{ between: 'medium' }}>
            <Box size={{ height: 'xsmall', width: 'xsmall' }}
              justify="center" align="center" colorIndex="grey-4">
              <Label>XSmall</Label>
            </Box>
            <Box size={{ height: 'small', width: 'small' }}
              justify="center" align="center" colorIndex="grey-4">
              <Label>Small</Label>
            </Box>
            <Box size={{ height: 'medium', width: 'medium' }}
              justify="center" align="center" colorIndex="grey-4">
              <Label>Medium</Label>
            </Box>
            <Box size={{ height: 'large', width: 'large' }}
              justify="center" align="center" colorIndex="grey-4">
              <Label>Large</Label>
            </Box>
            <Box size={{ height: 'xlarge', width: 'xlarge' }}
              justify="center" align="center" colorIndex="grey-4">
              <Label>XLarge</Label>
            </Box>
            <Box size={{ height: 'xxlarge', width: 'xxlarge' }}
              justify="center" align="center" colorIndex="grey-4">
              <Label>XXLarge</Label>
            </Box>
          </Box>
        </section>

        <section>
          <h2>Header</h2>
          <p>Components
          like <NavAnchor path="/docs/header">
          Header</NavAnchor> use sizes for height stops as illustrated
          below.</p>

          <Box pad={{ between: 'medium' }}>
            <Header size="medium" pad="medium" colorIndex="grey-4">
              Medium
            </Header>
            <Header size="large" pad="medium" colorIndex="grey-4">Large</Header>
          </Box>
        </section>

      </DocsArticle>
    );
  }
};
