import React, { FC } from 'react';
import { Gitgraph } from '@gitgraph/react';

import graphData from 'data/export.json';

const Graph: FC = () => (
  <Gitgraph>
    {(gitgraph) => {
      gitgraph.import(graphData);
    }}
  </Gitgraph>
);

export default Graph;
