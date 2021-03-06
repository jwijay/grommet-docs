// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Heading from 'grommet/components/Heading';
import Anchor from 'grommet/components/Anchor';
import DocsArticle from '../../components/DocsArticle';
import Example from '../Example';

Heading.displayName = 'Heading';

const USAGE =
`import Heading from 'grommet/components/Heading';
<Heading>
  {contents}
</Heading>`;

export default class HeadingDoc extends Component {

  render () {
    return (
      <DocsArticle title="Heading" colorIndex="neutral-3">

        <section>
          <p>An HTML heading, one of h1, h2, h3, h4, h5, h6.
           See <Anchor path="/docs/typography">Typography</Anchor> for
           examples of all heading tags.</p>
          <Heading>Sample Heading</Heading>
        </section>

        <section>
          <h2>Usage</h2>
          <pre><code className="html hljs xml">{USAGE}</code></pre>
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>align       start|center|end</code></dt>
            <dd>The horizontal alignment of the Heading. Defaults
              to <code>start</code>.</dd>
            <dt><code>margin      none|small|medium|large</code></dt>
            <dd>The vertical margin below the Heading. Defaults
              to <code>medium</code>.</dd>
            <dt><code>strong      true|false</code></dt>
            <dd>If the Heading should be bold.
              Defaults to <code>false</code>.</dd>
            <dt><code>tag         h1|h2|h3|h4|h5|h6</code></dt>
            <dd>Which HTML heading level should be used.
              Defaults to <code>h1</code>.</dd>
            <dt><code>uppercase   true|false</code></dt>
            <dd>Convert the heading to uppercase.
              Defaults to <code>false</code>.</dd>
          </dl>
        </section>

        <section>
          <h2>Example</h2>
          <Example code={
            <Heading>Sample Heading</Heading>
          } />
        </section>

      </DocsArticle>
    );
  }
};
