import { useState } from 'react'
import { cn } from '../../utils/cn'
import { isDev } from '../../utils/isDev'
import type { ImageAsset } from '../../data/images'

type SmartImageProps = {
  asset: ImageAsset
  /** Two or three characters shown while the real image is missing. */
  monogram: string
  /** Tailwind aspect-ratio class, e.g. 'aspect-[4/5]'. */
  ratio?: string
  className?: string
  imageClassName?: string
  priority?: boolean
  /**
   * Show the expected file path under the placeholder. On by default in local
   * development so missing images are obvious, off in production so visitors
   * only ever see the designed placeholder.
   */
  showFallbackCaption?: boolean
}

/**
 * Renders an image from the central image config and falls back to a designed
 * placeholder when the file has not been supplied yet, so the page never shows
 * a broken image icon.
 */
export function SmartImage({
  asset,
  monogram,
  ratio = 'aspect-[16/10]',
  className,
  imageClassName,
  priority = false,
  showFallbackCaption = isDev,
}: SmartImageProps) {
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading')

  return (
    <div
      className={cn('relative overflow-hidden border border-line bg-wash', ratio, className)}
      data-status={status}
    >
      {status !== 'error' && (
        <img
          src={asset.src}
          alt={asset.alt}
          width={asset.width}
          height={asset.height}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setStatus('ready')}
          onError={() => setStatus('error')}
          style={{ objectPosition: asset.objectPosition ?? 'center' }}
          className={cn(
            'h-full w-full object-cover transition-opacity duration-700 ease-editorial',
            status === 'ready' ? 'opacity-100' : 'opacity-0',
            imageClassName,
          )}
        />
      )}

      {status !== 'ready' && (
        <div
          aria-hidden="true"
          className="absolute inset-0 flex flex-col items-center justify-center bg-wash px-6 text-center"
        >
          <span
            className="font-display text-[clamp(2.5rem,8vw,5rem)] leading-none text-muted/[0.10]"
            style={{ letterSpacing: '0.02em' }}
          >
            {monogram}
          </span>
          {showFallbackCaption && (
            <span className="mt-4 max-w-[24ch] font-label text-[0.625rem] uppercase leading-relaxed tracking-[0.14em] text-muted/70">
              {asset.src}
            </span>
          )}
        </div>
      )}
    </div>
  )
}
