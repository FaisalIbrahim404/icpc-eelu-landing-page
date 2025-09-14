/// <reference types="astro/client" />
/// <reference types="astro/astro-jsx" />
/// <reference path="../.astro/types.d.ts" />

import type React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements extends React.JSX.IntrinsicElements {}
  }
}
