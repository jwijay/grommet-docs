// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Video from 'grommet/components/Video';
import Anchor from 'grommet/components/Anchor';
import DocsArticle from '../../../components/DocsArticle';

const USAGE =
`import Video from 'grommet/components/Video';
<Video>
  <source src="url-path" type='video/mp4' />
</Video>`;

export default class VideoDoc extends Component {
  render () {

    return (
      <DocsArticle title="Video" colorIndex="neutral-3">

        <section>
          <p>Video built on the HTML5 video element.</p>
          <Video size="small">
            <source src="/video/test.mp4" type="video/mp4"/>
          </Video>
        </section>

        <section>
          <h2>Usage</h2>
          <pre><code className="html hljs xml">{USAGE}</code></pre>
          <p>Callers must include
            child <code>{'<source>'}</code> elements according to the
            HTML5 <code>{'<video>'}</code> specification.</p>
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>allowFullScreen   true|false</code></dt>
            <dd>Enables fullscreen/expand control button on player.</dd>
            <dt><code>autoPlay          true|false</code></dt>
            <dd>Enables automatic playback of the video as soon as it is
              loaded. Defaults to <code>false</code>.</dd>
            <dt><code>colorIndex        {"{category}-{index}"}</code></dt>
            <dd>The color identifier to use for the background color.
              For example: <code>"neutral-1"</code>. This is visible when a
              poster image is not the same aspect ratio as the video.</dd>
            <dt><code>full              true|false</code></dt>
            <dd>Whether the width should take the full container width.</dd>
            <dt><code>loop              true|false</code></dt>
            <dd>Enables continuous video looping. Defaults
              to <code>false</code>.</dd>
            <dt><code>muted             true|false</code></dt>
            <dd>Enables video muting. This option is best used with
              the <code>autoPlay</code> flag. Defaults
              to <code>false</code>.</dd>
            <dt><code>poster            {"{string}"}</code></dt>
            <dd>Poster image to show before the video first plays.</dd>
            <dt><code>shareLink         {"{string}"}</code></dt>
            <dd>Link to be used for social media sharing.
                Shown at the end of the video.</dd>
            <dt><code>shareHeadline     {"{string}"}</code></dt>
            <dd>Headline to be used for social media sharing.</dd>
            <dt><code>shareText         {"{string}"}</code></dt>
            <dd>Text to be used for social media sharing.</dd>
            <dt><code>showControls      true|false</code></dt>
            <dd>Show controls such as play button, progress bar, etc. on
              top of video. Defaults to <code>true</code>.</dd>
            <dt><code>size              small|medium|large</code></dt>
            <dd>The width of the Video. Defaults to <code>medium</code> unless
              the <code>full</code> option is specified.
              The height will adapt to the aspect ratio of the video.</dd>
            <dt><code>timeline          {"[{...}]"}</code></dt>
            <dd>An array of: <code>
              {"{label: <string>, seconds: <number>}"}
              </code> used to indicate chapter markers.</dd>
            <dt><code>title             {"{string}|{node}"}</code></dt>
            <dd>Descriptive title.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <Anchor primary={true} path={`/docs/video/examples`}>
            Video Examples
          </Anchor>
        </section>

      </DocsArticle>
    );
  }
};
