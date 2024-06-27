export interface AcvLoadingProps {
  /**
   * Title of the Loading
   */
  title?: string

  /**
   * Description of the Loading
   */
  description?: string
}

export interface AcvLoadingEvents {
  /**
   * Triggered when the component is closed
   * @arg {string} eventName - The name of the event
   * @arg {string} visible - The visibility state of the component
   */
  (eventName: 'close', visible: boolean): void
}

export interface AcvLoadingSlots {
  /**
   * The default slot content
   */
  default: void
  /**
   * The description slot content
   * @binding {string} description - The description prop value
   */
  description: void
}
