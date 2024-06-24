export interface AcvOptionGroupProps {
  /**
   * Title of the OptionGroup
   */
  title?: string

  /**
   * Description of the OptionGroup
   */
  description?: string
}

export interface AcvOptionGroupEvents {
  /**
   * Triggered when the component is closed
   * @arg {string} eventName - The name of the event
   * @arg {string} visible - The visibility state of the component
   */
  (eventName: 'close', visible: boolean): void
}

export interface AcvOptionGroupSlots {
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
