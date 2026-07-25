document.addEventListener('DOMContentLoaded', function () {
  var professionPills = document.querySelectorAll('.portfolio-profession-pill');
  var items = document.querySelectorAll('.portfolio-flex-item');
  var emptyState = document.getElementById('portfolioEmptyState');
  var cvLinks = document.querySelectorAll('[data-profession-cv]');

  var flexRow = document.getElementById('portfolioFlexRow');
  var showMoreRow = document.getElementById('portfolioShowMoreRow');
  var showMoreBtn = document.getElementById('portfolioShowMoreBtn');

  var select = document.getElementById('portfolioTagSelect');
  var input = document.getElementById('portfolioSelectInput');
  var listbox = document.getElementById('portfolioSelectListbox');
  var options = select ? Array.prototype.slice.call(select.querySelectorAll('.portfolio-select-option')) : [];
  var chip = document.getElementById('portfolioSelectChip');
  var chipLabel = document.getElementById('portfolioSelectChipLabel');
  var chipClear = document.getElementById('portfolioSelectClear');

  if (!items.length) return;

  // Profession -> CV file. All point at the one real CV today;
  // swap in profession-specific files here as they're written.
  var CV_BY_PROFESSION = {
    all: '/files/SasCV.pdf',
    devops: '/files/SasCV.pdf',
    'software engineering': '/files/SasCV.pdf',
    ai: '/files/SasCV.pdf',
    hardware: '/files/SasCV.pdf',
    'full-stack': '/files/SasCV.pdf',
    'front-end': '/files/SasCV.pdf',
    'back-end': '/files/SasCV.pdf',
    'mobile development': '/files/SasCV.pdf',
  };

  function updateEmptyState() {
    if (!emptyState) return;
    var anyVisible = false;
    items.forEach(function (item) {
      if (!item.classList.contains('filtered-out')) anyVisible = true;
    });
    emptyState.hidden = anyVisible;
  }

  function applyFilter(matchFn) {
    items.forEach(function (item) {
      item.classList.toggle('filtered-out', !matchFn(item));
    });
    updateEmptyState();
  }

  function updateEducationVariant(profession) {
    var key = profession.toLowerCase();
    var descs = document.querySelectorAll('.education-desc');
    if (!descs.length) return;
    var hasVariant = document.querySelector('.education-desc[data-profession="' + key + '"]');
    descs.forEach(function (desc) {
      var matchesKey = desc.getAttribute('data-profession') === key;
      var isDefaultAndNoVariant = desc.getAttribute('data-profession') === 'all' && !hasVariant;
      desc.hidden = !(matchesKey || isDefaultAndNoVariant);
    });
  }

  function resetTagSelect() {
    if (!select) return;
    select.removeAttribute('data-active-filter');
    if (chip) chip.hidden = true;
    if (chipLabel) chipLabel.textContent = '';
    if (input) input.value = '';
  }

  function resetProfessionPills() {
    professionPills.forEach(function (p) {
      p.classList.toggle('active', p.getAttribute('data-profession-filter') === 'all');
    });
  }

  // Mobile "Show more" cap — only meaningful in the default, unfiltered "All" view.
  // Any active filter shows its full (already-reduced) result set instead of capping it.
  function setShowMoreForDefaultView(isDefaultAll) {
    if (!flexRow || !showMoreRow || !showMoreBtn) return;
    if (isDefaultAll) {
      flexRow.classList.add('portfolio-collapsed');
      showMoreBtn.setAttribute('aria-expanded', 'false');
      showMoreBtn.textContent = 'Show more projects';
      showMoreRow.hidden = false;
    } else {
      flexRow.classList.remove('portfolio-collapsed');
      showMoreRow.hidden = true;
    }
  }

  if (showMoreBtn) {
    showMoreBtn.addEventListener('click', function () {
      var expanded = flexRow.classList.contains('portfolio-collapsed');
      flexRow.classList.toggle('portfolio-collapsed', !expanded);
      showMoreBtn.setAttribute('aria-expanded', String(expanded));
      showMoreBtn.textContent = expanded ? 'Show fewer projects' : 'Show more projects';
    });
  }

  setShowMoreForDefaultView(true);

  if (professionPills.length) {
    professionPills.forEach(function (pill) {
      pill.addEventListener('click', function () {
        var profession = pill.getAttribute('data-profession-filter');

        professionPills.forEach(function (p) { p.classList.remove('active'); });
        pill.classList.add('active');

        // Selecting a profession resets the lower tier back to "all"
        resetTagSelect();

        setShowMoreForDefaultView(profession === 'all');

        if (profession === 'all') {
          applyFilter(function () { return true; });
        } else {
          applyFilter(function (item) {
            var professions = (item.getAttribute('data-profession') || '').split(',');
            return professions.indexOf(profession) !== -1;
          });
        }

        var key = profession.toLowerCase();
        var cvHref = CV_BY_PROFESSION[key] || CV_BY_PROFESSION.all;
        var cvLabel = profession === 'all' ? 'CV' : profession + ' CV';
        cvLinks.forEach(function (link) {
          link.setAttribute('href', cvHref);
          link.setAttribute('aria-label', cvLabel);
          link.setAttribute('title', cvLabel);
          if (link.hasAttribute('data-cv-nav-label')) {
            link.textContent = cvLabel;
          }
          var icon = link.querySelector('#fa-3');
          if (icon) {
            icon.setAttribute('aria-label', cvLabel);
            icon.setAttribute('title', cvLabel);
          }
        });

        updateEducationVariant(profession);
      });
    });
  }

  // Searchable select for advanced project specifications (category/tag tier)
  if (select && input && listbox && options.length) {
    var activeIndex = -1;

    function visibleOptions() {
      return options.filter(function (opt) { return opt.style.display !== 'none'; });
    }

    function setActiveOption(index) {
      var visible = visibleOptions();
      visible.forEach(function (opt) { opt.classList.remove('active'); });
      activeIndex = index;
      if (visible[index]) visible[index].classList.add('active');
    }

    function openListbox() {
      listbox.hidden = false;
      input.setAttribute('aria-expanded', 'true');
    }

    function closeListbox() {
      listbox.hidden = true;
      input.setAttribute('aria-expanded', 'false');
      activeIndex = -1;
    }

    function filterOptions(query) {
      var q = query.trim().toLowerCase();
      var anyVisible = false;
      options.forEach(function (opt) {
        var match = !q || opt.textContent.toLowerCase().indexOf(q) !== -1;
        opt.style.display = match ? '' : 'none';
        if (match) anyVisible = true;
      });

      var existingEmpty = listbox.querySelector('.portfolio-select-option-empty');
      if (existingEmpty) existingEmpty.remove();
      if (!anyVisible) {
        var empty = document.createElement('li');
        empty.className = 'portfolio-select-option-empty';
        empty.textContent = 'No specifications match "' + query.trim() + '"';
        listbox.appendChild(empty);
      }
      activeIndex = -1;
    }

    function selectOption(opt) {
      var filter = opt.getAttribute('data-filter');

      select.setAttribute('data-active-filter', filter);
      if (chip && chipLabel) {
        chipLabel.textContent = filter;
        chip.hidden = false;
      }
      input.value = '';
      filterOptions('');
      closeListbox();

      resetProfessionPills();
      if (cvLink) cvLink.setAttribute('href', CV_BY_PROFESSION.all);
      updateEducationVariant('all');
      setShowMoreForDefaultView(false);

      applyFilter(function (item) {
        var category = item.getAttribute('data-category');
        var tags = (item.getAttribute('data-tags') || '').split(',');
        return category === filter || tags.indexOf(filter) !== -1;
      });
    }

    function clearSelection() {
      resetTagSelect();
      setShowMoreForDefaultView(true);
      applyFilter(function () { return true; });
      input.focus();
    }

    input.addEventListener('focus', function () {
      openListbox();
    });

    input.addEventListener('input', function () {
      filterOptions(input.value);
      openListbox();
    });

    input.addEventListener('keydown', function (e) {
      var visible = visibleOptions();
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        openListbox();
        setActiveOption(Math.min(activeIndex + 1, visible.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveOption(Math.max(activeIndex - 1, 0));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (activeIndex >= 0 && visible[activeIndex]) {
          selectOption(visible[activeIndex]);
        } else if (visible.length === 1) {
          selectOption(visible[0]);
        }
      } else if (e.key === 'Escape') {
        closeListbox();
      }
    });

    options.forEach(function (opt) {
      opt.addEventListener('click', function () { selectOption(opt); });
    });

    if (chipClear) chipClear.addEventListener('click', clearSelection);

    document.addEventListener('click', function (e) {
      if (select.contains(e.target)) return;
      closeListbox();
    });
  }
});
