import $ from 'jquery';
import PerfectScrollbar from 'perfect-scrollbar';

const topworkSidebarJQuery = () => {
  $('#root').addClass('app-topwork');
  const mailSidebarBody = new PerfectScrollbar('.topwork-sidebar-body', {
    suppressScrollX: true
  });

  $('#topworkMenu').on('click', function(e) {
    e.preventDefault();

    $('#root').addClass('topwork-sidebar-show');

    $(this).addClass('d-none');
    $('#mainMenuOpen').removeClass('d-none');
  });

  $(document).on('click touchstart', function(e) {
    e.stopPropagation();

    // closing of sidebar menu when clicking outside of it
    // if (!$(e.target).closest('.burger-menu').length) {
    //   const sb = $(e.target).closest('.topwork-sidebar').length;
    //   if (!sb) {
    //     $('#root').removeClass('topwork-sidebar-show');

    //     $('#topworkMenu').removeClass('d-none');
    //     $('#mainMenuOpen').addClass('d-none');
    //   }
    // }
  });

  $('.important').on('click', function(e) {
    e.preventDefault();

    const parent = $(this).closest('.card-file');
    const important = parent.find('.marker-icon');

    if (!important.length) {
      $(this)
        .closest('.card-file')
        .append('<div class="marker-icon marker-warning pos-absolute t--1 l--1"><i data-feather="star"></i></div>');

      $(this).html('<i data-feather="star"></i> Unmark as Important');
    } else {
      important.remove();

      $(this).html('<i data-feather="star"></i> Mark as Important');
    }

    feather.replace();
  });

  $('.download').on('click', function(e) {
    e.preventDefault();

    $('#toast').toast('show');
  });

  if (window.matchMedia('(min-width: 1200px)').matches) {
    $('.aside').addClass('minimize');
  }
};

export { topworkSidebarJQuery };
