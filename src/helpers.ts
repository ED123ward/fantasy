import { RefObject, useEffect, useState, createContext, useContext } from 'react'

interface Args extends IntersectionObserverInit {
  freezeOnceVisible?: boolean
}

function useIntersectionObserver(
  elementRef: RefObject<Element>,
  {
    threshold = 0.5,
    root = null,
    rootMargin = '0%',
    freezeOnceVisible = false,
  }: Args,
): IntersectionObserverEntry | undefined {
  const [entry, setEntry] = useState<IntersectionObserverEntry>()

  const frozen = entry?.isIntersecting && freezeOnceVisible

  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry)
  }

  useEffect(() => {
    const node = elementRef?.current // DOM Ref
    const hasIOSupport = !!window.IntersectionObserver

    if (!hasIOSupport || frozen || !node) return

    const observerParams = { threshold, root, rootMargin }
    const observer = new IntersectionObserver(updateEntry, observerParams)

    observer.observe(node)

    return () => observer.disconnect()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementRef, JSON.stringify(threshold), root, rootMargin, frozen])

  return entry
}

export default useIntersectionObserver
interface InViewProps {
  views: {
    home: boolean,
    about: boolean,
    vision: boolean,
    product: boolean,
    contact: boolean
  };
  handleChangeViews: (view: {
    home: boolean,
    about: boolean,
    vision: boolean,
    product: boolean,
    contact: boolean
  }) => void;

}
// eslint-disable-next-line @typescript-eslint/no-empty-function
export const InViewContext = createContext<InViewProps>({ views: { home: false, about: false, vision: false, product: false, contact: false }, handleChangeViews: () => { } })
export const useInViewContext = () => useContext(InViewContext);