// (C) Copyright 2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Value from 'grommet/components/Value';
import Anchor from 'grommet/components/Anchor';
import DocsArticle from '../../../components/DocsArticle';

Value.displayName = 'Value';

const USAGE =
`import Value from 'grommet/components/Value';
<Value value={75} />`;

export default class ValueDoc extends Component {

  render () {
    return (
      <DocsArticle title="Value" colorIndex="neutral-3">

        <section>
          <p>Value component, focusing on a single number.</p>
          <Value value={75} />
        </section>

        <section>
          <h2>Usage</h2>
          <pre><code className="html hljs xml">{USAGE}</code></pre>
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>align        start|center|end</code></dt>
            <dd>The horizontal alignment of the label. Defaults
              to <code>center</code>.</dd>
            <dt><code>colorIndex   {"{category}-{index}"}</code></dt>
            <dd>The color identifier to use for the text color.
              For example: <code>
              neutral-1</code>. See <Anchor path="/docs/color">
              Color</Anchor> for possible values.</dd>
            <dt><code>icon         {"{element}"}</code></dt>
            <dd>Optional icon element to place next to the value.
              See <Anchor path="/docs/icon">Icon</Anchor>.</dd>
            <dt><code>label        {"{string}"}</code></dt>
            <dd>Optional short description of the value.</dd>
            <dt><code>onClick      {"{function}"}</code></dt>
            <dd>Click handler.</dd>
            <dt><code>size         small|medium|large|xlarge</code></dt>
            <dd>The size of the value. Defaults to <code>medium</code>.</dd>
            <dt><code>trendIcon    {"{element}"}</code></dt>
            <dd>Optional icon element to place next to the value indicating
              the trend. For example, a <code>LinkUp</code> icon.
              See <Anchor path="/docs/icon">Icon</Anchor>.</dd>
            <dt><code>value        {"{number}"}</code></dt>
            <dd>The value itself.</dd>
            <dt><code>units        {"{string}"}</code></dt>
            <dd>Optional units to display next to the value.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <Anchor primary={true} path={`/docs/value/examples`}>
            Value Examples
          </Anchor>
        </section>

      </DocsArticle>
    );
  }
}
