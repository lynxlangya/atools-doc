new Crawler({
    appId: '7OURGM385T',
    apiKey: 'aabf3ba6f45f9402632ecbab9200f37e',
    rateLimit: 8,
    startUrls: ['https://atools.vercel.app/'],
    sitemaps: ['https://atools.vercel.app/sitemap.xml'],
    ignoreCanonicalTo: true,
    discoveryPatterns: ['https://atools.vercel.app/**'],
    actions: [
      {
        indexName: 'atools',
        pathsToMatch: ['https://atools.vercel.app/**'],
        recordExtractor: ({ $, helpers }) => {
          // priority order: deepest active sub list header -> navbar active item -> 'Documentation'
          const lvl0 =
            $(
              '.menu__link.menu__link--sublist.menu__link--active, .navbar__item.navbar__link--active'
            )
              .last()
              .text() || 'Documentation';
  
          return helpers.docsearch({
            recordProps: {
              lvl0: {
                selectors: '',
                defaultValue: lvl0,
              },
              lvl1: 'header h1',
              lvl2: 'article h2',
              lvl3: 'article h3',
              lvl4: 'article h4',
              lvl5: 'article h5, article td:first-child',
              lvl6: 'article h6',
              content: 'article p, article li, article td:last-child',
            },
            indexHeadings: true,
            aggregateContent: true,
          });
        },
      },
    ],
    initialIndexSettings: {
      YOUR_INDEX_NAME: {
        attributesForFaceting: [
          'type',
          'lang',
          'language',
          'version',
          'docusaurus_tag',
        ],
        attributesToRetrieve: [
          'hierarchy',
          'content',
          'anchor',
          'url',
          'url_without_anchor',
          'type',
        ],
        attributesToHighlight: ['hierarchy', 'hierarchy_camel', 'content'],
        attributesToSnippet: ['content:10'],
        camelCaseAttributes: ['hierarchy', 'hierarchy_radio', 'content'],
        searchableAttributes: [
          'unordered(hierarchy_radio_camel.lvl0)',
          'unordered(hierarchy_radio.lvl0)',
          'unordered(hierarchy_radio_camel.lvl1)',
          'unordered(hierarchy_radio.lvl1)',
          'unordered(hierarchy_radio_camel.lvl2)',
          'unordered(hierarchy_radio.lvl2)',
          'unordered(hierarchy_radio_camel.lvl3)',
          'unordered(hierarchy_radio.lvl3)',
          'unordered(hierarchy_radio_camel.lvl4)',
          'unordered(hierarchy_radio.lvl4)',
          'unordered(hierarchy_radio_camel.lvl5)',
          'unordered(hierarchy_radio.lvl5)',
          'unordered(hierarchy_radio_camel.lvl6)',
          'unordered(hierarchy_radio.lvl6)',
          'unordered(hierarchy_camel.lvl0)',
          'unordered(hierarchy.lvl0)',
          'unordered(hierarchy_camel.lvl1)',
          'unordered(hierarchy.lvl1)',
          'unordered(hierarchy_camel.lvl2)',
          'unordered(hierarchy.lvl2)',
          'unordered(hierarchy_camel.lvl3)',
          'unordered(hierarchy.lvl3)',
          'unordered(hierarchy_camel.lvl4)',
          'unordered(hierarchy.lvl4)',
          'unordered(hierarchy_camel.lvl5)',
          'unordered(hierarchy.lvl5)',
          'unordered(hierarchy_camel.lvl6)',
          'unordered(hierarchy.lvl6)',
          'content',
        ],
        distinct: true,
        attributeForDistinct: 'url',
        customRanking: [
          'desc(weight.pageRank)',
          'desc(weight.level)',
          'asc(weight.position)',
        ],
        ranking: [
          'words',
          'filters',
          'typo',
          'attribute',
          'proximity',
          'exact',
          'custom',
        ],
        highlightPreTag: '<span class="algolia-docsearch-suggestion--highlight">',
        highlightPostTag: '</span>',
        minWordSizefor1Typo: 3,
        minWordSizefor2Typos: 7,
        allowTyposOnNumericTokens: false,
        minProximity: 1,
        ignorePlurals: true,
        advancedSyntax: true,
        attributeCriteriaComputedByMinProximity: true,
        removeWordsIfNoResults: 'allOptional',
        separatorsToIndex: '_',
      },
    },
  });