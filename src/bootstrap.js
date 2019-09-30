import $ from 'jquery'
import 'bootstrap'

try {
  window.Popper = require('popper.js').default
  window.$ = window.jQuery = $
  require('bootstrap')
} catch (e) {
}

/* ------------------------------------------------------------------------------
 *
 *  # Template JS core
 *
 *  Includes minimum required JS code for proper template functioning
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------
const App = function () {
  // Disable all transitions
  const _transitionsDisabled = function () {
    $('body').addClass('no-transitions')
  }

  // Enable all transitions
  const _transitionsEnabled = function () {
    $('body').removeClass('no-transitions')
  }

  // Resize main sidebar
  const _sidebarMainResize = function () {

    // Flip 2nd level if menu overflows
    // bottom edge of browser window
    const revertBottomMenus = function () {
      $('.sidebar-main').find('.nav-sidebar').children('.nav-item-submenu').hover(function () {
        // eslint-disable-next-line
        let totalHeight = 0

        const $this = $(this)
        const navSubmenuClass = 'nav-group-sub'
        const navSubmenuReversedClass = 'nav-item-submenu-reversed'

        totalHeight += $this.find('.' + navSubmenuClass).filter(':visible').outerHeight()

        if ($this.children('.' + navSubmenuClass).length) {
          if (($this.children('.' + navSubmenuClass).offset().top + $this.find('.' + navSubmenuClass).filter(':visible').outerHeight()) > document.body.clientHeight) {
            $this.addClass(navSubmenuReversedClass)
          } else {
            $this.removeClass(navSubmenuReversedClass)
          }
        }
      })
    }

    // If sidebar is resized by default
    if ($('body').hasClass('sidebar-xs')) {
      revertBottomMenus()
    }

    // Toggle min sidebar class
    $('.sidebar-main-toggle').on('click', function (e) {
      e.preventDefault()

      $('body').toggleClass('sidebar-xs').removeClass('sidebar-mobile-main')
      revertBottomMenus()
    })
  }

  // Toggle main sidebar
  const _sidebarMainToggle = function () {
    $(document).on('click', '.sidebar-main-hide', function (e) {
      e.preventDefault()
      $('body').toggleClass('sidebar-main-hidden')
    })
  }

  // Toggle secondary sidebar
  const _sidebarSecondaryToggle = function () {
    $(document).on('click', '.sidebar-secondary-toggle', function (e) {
      e.preventDefault()
      $('body').toggleClass('sidebar-secondary-hidden')
    })
  }


  // Show right, resize main
  const _sidebarRightMainToggle = function () {
    $(document).on('click', '.sidebar-right-main-toggle', function (e) {
      e.preventDefault()

      // Right sidebar visibility
      $('body').toggleClass('sidebar-right-visible')

      // If visible
      if ($('body').hasClass('sidebar-right-visible')) {

        // Make main sidebar mini
        $('body').addClass('sidebar-xs')

        // Hide children lists if they are opened, since sliding animation adds inline CSS
        $('.sidebar-main .nav-sidebar').children('.nav-item').children('.nav-group-sub').css('display', '')
      } else {
        $('body').removeClass('sidebar-xs')
      }
    })
  }

  // Show right, hide main
  const _sidebarRightMainHide = function () {
    $(document).on('click', '.sidebar-right-main-hide', function (e) {
      e.preventDefault()

      const body = $('body')

      // Opposite sidebar visibility
      body.toggleClass('sidebar-right-visible')

      // If visible
      if (body.hasClass('sidebar-right-visible')) {
        body.addClass('sidebar-main-hidden')
      } else {
        body.removeClass('sidebar-main-hidden')
      }
    })
  }

  // Toggle right sidebar
  const _sidebarRightToggle = function () {
    $(document).on('click', '.sidebar-right-toggle', function (e) {
      e.preventDefault()

      $('body').toggleClass('sidebar-right-visible')
    })
  }

  // Show right, hide secondary
  const _sidebarRightSecondaryToggle = function () {
    $(document).on('click', '.sidebar-right-secondary-toggle', function (e) {
      e.preventDefault()

      const bodyEl = $('body')
      // Opposite sidebar visibility
      bodyEl.toggleClass('sidebar-right-visible')

      // If visible
      if (bodyEl.hasClass('sidebar-right-visible')) {
        bodyEl.addClass('sidebar-secondary-hidden')
      } else {
        bodyEl.removeClass('sidebar-secondary-hidden')
      }
    })
  }


  // Toggle content sidebar
  const _sidebarComponentToggle = function () {
    $(document).on('click', '.sidebar-component-toggle', function (e) {
      e.preventDefault()
      $('body').toggleClass('sidebar-component-hidden')
    })
  }


  //
  // On mobile
  //

  // Expand sidebar to full screen on mobile
  const _sidebarMobileFullscreen = function () {
    $('.sidebar-mobile-expand').on('click', function (e) {
      e.preventDefault()
      var $sidebar = $(this).parents('.sidebar'),
        sidebarFullscreenClass = 'sidebar-fullscreen'

      if (!$sidebar.hasClass(sidebarFullscreenClass)) {
        $sidebar.addClass(sidebarFullscreenClass)
      } else {
        $sidebar.removeClass(sidebarFullscreenClass)
      }
    })
  }

  // Toggle main sidebar on mobile
  const _sidebarMobileMainToggle = function () {
    $('.sidebar-mobile-main-toggle').on('click', function (e) {
      e.preventDefault()
      $('body').toggleClass('sidebar-mobile-main').removeClass('sidebar-mobile-secondary sidebar-mobile-right')

      const sidebarMainEl = $('.sidebar-main')
      if (sidebarMainEl.hasClass('sidebar-fullscreen')) {
        sidebarMainEl.removeClass('sidebar-fullscreen')
      }
    })
  }

  // Toggle secondary sidebar on mobile
  const _sidebarMobileSecondaryToggle = function () {
    $('.sidebar-mobile-secondary-toggle').on('click', function (e) {
      e.preventDefault()
      $('body').toggleClass('sidebar-mobile-secondary').removeClass('sidebar-mobile-main sidebar-mobile-right')

      const sidebarEl = $('.sidebar-secondary')
      // Fullscreen mode
      if (sidebarEl.hasClass('sidebar-fullscreen')) {
        sidebarEl.removeClass('sidebar-fullscreen')
      }
    })
  }

  // Toggle right sidebar on mobile
  const _sidebarMobileRightToggle = function () {
    $('.sidebar-mobile-right-toggle').on('click', function (e) {
      e.preventDefault()
      $('body').toggleClass('sidebar-mobile-right').removeClass('sidebar-mobile-main sidebar-mobile-secondary')

      const sidebarRight = $('.sidebar-right')
      // Hide sidebar if in fullscreen mode on mobile
      if (sidebarRight.hasClass('sidebar-fullscreen')) {
        sidebarRight.removeClass('sidebar-fullscreen')
      }
    })
  }

  // Toggle component sidebar on mobile
  const _sidebarMobileComponentToggle = function () {
    $('.sidebar-mobile-component-toggle').on('click', function (e) {
      e.preventDefault()
      $('body').toggleClass('sidebar-mobile-component')
    })
  }


  // Navigations
  // -------------------------

  // Sidebar navigation
  const _navigationSidebar = function () {

    // Define default class names and options
    let navClass = 'nav-sidebar',
      navItemClass = 'nav-item',
      navItemOpenClass = 'nav-item-open',
      navLinkClass = 'nav-link',
      navSubmenuClass = 'nav-group-sub',
      navSlidingSpeed = 250

    // Configure collapsible functionality
    $('.' + navClass).each(function () {
      $(this).find('.' + navItemClass).has('.' + navSubmenuClass).children('.' + navItemClass + ' > ' + '.' + navLinkClass).not('.disabled').on('click', function (e) {
        e.preventDefault()

        // Simplify stuff
        var $target = $(this),
          $navSidebarMini = $('.sidebar-xs').not('.sidebar-mobile-main').find('.sidebar-main .' + navClass).children('.' + navItemClass)

        // Collapsible
        if ($target.parent('.' + navItemClass).hasClass(navItemOpenClass)) {
          $target.parent('.' + navItemClass).not($navSidebarMini).removeClass(navItemOpenClass).children('.' + navSubmenuClass).slideUp(navSlidingSpeed)
        } else {
          $target.parent('.' + navItemClass).not($navSidebarMini).addClass(navItemOpenClass).children('.' + navSubmenuClass).slideDown(navSlidingSpeed)
        }

        // Accordion
        if ($target.parents('.' + navClass).data('nav-type') === 'accordion') {
          $target.parent('.' + navItemClass).not($navSidebarMini).siblings(':has(.' + navSubmenuClass + ')').removeClass(navItemOpenClass).children('.' + navSubmenuClass).slideUp(navSlidingSpeed)
        }
      })
    })

    // Disable click in disabled navigation items
    $(document).on('click', '.' + navClass + ' .disabled', function (e) {
      e.preventDefault()
    })

    // Scrollspy navigation
    $('.nav-scrollspy').find('.' + navItemClass).has('.' + navSubmenuClass).children('.' + navItemClass + ' > ' + '.' + navLinkClass).off('click')
  }

  // Navbar navigation
  const _navigationNavbar = function () {

    // Prevent dropdown from closing on click
    $(document).on('click', '.dropdown-content', function (e) {
      e.stopPropagation()
    })

    // Disabled links
    $('.navbar-nav .disabled a, .nav-item-levels .disabled').on('click', function (e) {
      e.preventDefault()
      e.stopPropagation()
    })

    // Show tabs inside dropdowns
    $('.dropdown-content a[data-toggle="tab"]').on('click', function (e) {
      $(this).tab('show')
    })
  }


  // Components
  // -------------------------

  // Tooltip
  const _componentTooltip = function () {

    // Initialize
    $('[data-popup="tooltip"]').tooltip()

    // Demo tooltips, remove in production
    const demoTooltipSelector = '[data-popup="tooltip-demo"]'
    if ($(demoTooltipSelector).is(':visible')) {
      $(demoTooltipSelector).tooltip('show')
      setTimeout(function () {
        $(demoTooltipSelector).tooltip('hide')
      }, 2000)
    }
  }

  // Popover
  const _componentPopover = function () {
    $('[data-popup="popover"]').popover()
  }


  // Card actions
  // -------------------------

  // Reload card (uses BlockUI extension)
  const _cardActionReload = function () {
    $('.card [data-action=reload]:not(.disabled)').on('click', function (e) {
      e.preventDefault()
      var $target = $(this),
        block = $target.closest('.card')

      // Block card
      $(block).block({
        message: '<i class="icon-spinner2 spinner"/>',
        overlayCSS: {
          backgroundColor: '#fff',
          opacity: 0.8,
          cursor: 'wait',
          'box-shadow': '0 0 0 1px #ddd'
        },
        css: {
          border: 0,
          padding: 0,
          backgroundColor: 'none'
        }
      })

      // For demo purposes
      window.setTimeout(function () {
        $(block).unblock()
      }, 2000)
    })
  }

  // Collapse card
  const _cardActionCollapse = function () {
    let $cardCollapsedClass = $('.card-collapsed')

    // Hide if collapsed by default
    $cardCollapsedClass.children('.card-header').nextAll().hide()

    // Rotate icon if collapsed by default
    $cardCollapsedClass.find('[data-action=collapse]').addClass('rotate-180')

    // Collapse on click
    $('.card [data-action=collapse]:not(.disabled)').on('click', function (e) {
      var $target = $(this),
        slidingSpeed = 150

      e.preventDefault()
      $target.parents('.card').toggleClass('card-collapsed')
      $target.toggleClass('rotate-180')
      $target.closest('.card').children('.card-header').nextAll().slideToggle(slidingSpeed)
    })
  }

  // Remove card
  const _cardActionRemove = function () {
    $('.card [data-action=remove]').on('click', function (e) {
      e.preventDefault()
      let $target = $(this),
        slidingSpeed = 150

      // If not disabled
      if (!$target.hasClass('disabled')) {
        $target.closest('.card').slideUp({
          duration: slidingSpeed,
          start: function () {
            $target.addClass('d-block')
          },
          complete: function () {
            $target.remove()
          }
        })
      }
    })
  }

  // Card fullscreen mode
  const _cardActionFullscreen = function () {
    $('.card [data-action=fullscreen]').on('click', function (e) {
      e.preventDefault()

      // Define vars
      let $target = $(this),
        cardFullscreen = $target.closest('.card'),
        overflowHiddenClass = 'overflow-hidden',
        collapsedClass = 'collapsed-in-fullscreen',
        fullscreenAttr = 'data-fullscreen'

      // Toggle classes on card
      cardFullscreen.toggleClass('fixed-top h-100 rounded-0')

      // Configure
      if (!cardFullscreen.hasClass('fixed-top')) {
        $target.removeAttr(fullscreenAttr)
        cardFullscreen.children('.' + collapsedClass).removeClass('show')
        $('body').removeClass(overflowHiddenClass)
        $target.siblings('[data-action=move], [data-action=remove], [data-action=collapse]').removeClass('d-none')
      } else {
        $target.attr(fullscreenAttr, 'active')
        cardFullscreen.removeAttr('style').children('.collapse:not(.show)').addClass('show ' + collapsedClass)
        $('body').addClass(overflowHiddenClass)
        $target.siblings('[data-action=move], [data-action=remove], [data-action=collapse]').addClass('d-none')
      }
    })
  }


  // Misc
  // -------------------------

  // Dropdown submenus. Trigger on click
  const _dropdownSubmenu = function () {

    // All parent levels require .dropdown-toggle class
    $('.dropdown-menu').find('.dropdown-submenu').not('.disabled').find('.dropdown-toggle').on('click', function (e) {
      e.stopPropagation()
      e.preventDefault()

      // Remove "show" class in all siblings
      $(this).parent().siblings().removeClass('show').find('.show').removeClass('show')

      // Toggle submenu
      $(this).parent().toggleClass('show').children('.dropdown-menu').toggleClass('show')

      // Hide all levels when parent dropdown is closed
      $(this).parents('.show').on('hidden.bs.dropdown', function (e) {
        $('.dropdown-submenu .show, .dropdown-submenu.show').removeClass('show')
      })
    })
  }

  // Header elements toggler
  const _headerElements = function () {

    // Toggle visible state of header elements
    $('.header-elements-toggle').on('click', function (e) {
      e.preventDefault()
      $(this).parents('[class*=header-elements-]').find('.header-elements').toggleClass('d-none')
    })

    // Toggle visible state of footer elements
    $('.footer-elements-toggle').on('click', function (e) {
      e.preventDefault()
      $(this).parents('.card-footer').find('.footer-elements').toggleClass('d-none')
    })
  }


  //
  // Return objects assigned to module
  //

  return {
    // Disable transitions before page is fully loaded
    initBeforeLoad: function () {
      _transitionsDisabled()
    },

    // Enable transitions when page is fully loaded
    initAfterLoad: function () {
      _transitionsEnabled()
    },

    // Initialize all sidebars
    initSidebars: function () {

      // On desktop
      _sidebarMainResize()
      _sidebarMainToggle()
      _sidebarSecondaryToggle()
      _sidebarRightMainToggle()
      _sidebarRightMainHide()
      _sidebarRightToggle()
      _sidebarRightSecondaryToggle()
      _sidebarComponentToggle()

      // On mobile
      _sidebarMobileFullscreen()
      _sidebarMobileMainToggle()
      _sidebarMobileSecondaryToggle()
      _sidebarMobileRightToggle()
      _sidebarMobileComponentToggle()
    },

    // Initialize all navigations
    initNavigations: function () {
      _navigationSidebar()
      _navigationNavbar()
    },

    // Initialize all components
    initComponents: function () {
      _componentTooltip()
      _componentPopover()
    },

    // Initialize all card actions
    initCardActions: function () {
      _cardActionReload()
      _cardActionCollapse()
      _cardActionRemove()
      _cardActionFullscreen()
    },

    // Dropdown submenu
    initDropdownSubmenu: function () {
      _dropdownSubmenu()
    },

    initHeaderElementsToggle: function () {
      _headerElements()
    },

    // Initialize core
    initCore: function () {
      App.initSidebars()
      App.initNavigations()
      App.initComponents()
      App.initCardActions()
      App.initDropdownSubmenu()
      App.initHeaderElementsToggle()
    }
  }
}()


// Initialize module
// ------------------------------

// When content is loaded
document.addEventListener('DOMContentLoaded', function () {
  App.initBeforeLoad()
  App.initCore()
})

// When page is fully loaded
window.addEventListener('load', function () {
  App.initAfterLoad()
})

