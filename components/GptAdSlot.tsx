'use client';

import { useEffect, useRef } from 'react';
import { showSlot, type FillStatus } from './gpt';

/**
 * Fixed-size GAM/GPT ad unit (AdSense backfill). Funnel pages only —
 * content pages keep the plain AdSense component.
 */
export default function GptAdSlot({
  adUnit,
  width,
  height,
  onRender,
  className = '',
}: {
  /** GAM ad unit code, e.g. 'na_o_top' */
  adUnit: string;
  width: number;
  height: number;
  /** Official fill status from slotRenderEnded (isEmpty) */
  onRender?: (status: FillStatus) => void;
  className?: string;
}) {
  const divId = `gpt-${adUnit}`;
  const onRenderRef = useRef(onRender);
  onRenderRef.current = onRender;

  useEffect(() => {
    return showSlot({
      adUnit,
      divId,
      width,
      height,
      onRender: (status) => onRenderRef.current?.(status),
    });
  }, [adUnit, divId, width, height]);

  return (
    <div className={className}>
      {/* fixed-size placeholder avoids CLS; collapseEmptyDivs hides it when unfilled */}
      <div id={divId} style={{ width, height, margin: '0 auto' }} />
    </div>
  );
}
