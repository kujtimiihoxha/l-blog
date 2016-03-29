<?php

return [
      'source' => [
            'root'            => 'lblog',
            'page'            => 'admin/pages',
            'components'      => 'admin/components',
            'config'          => 'config',
            'dialogs'         => 'dialogs',
            'filters'         => 'filters',
            'services'        => 'services',
      ],
      'prefix' => [
            'component'       => '.component.js',
            'componentView'   => '.component.html',
            'dialog'          => '.dialog.js',
            'dialogView'      => '.dialog.html',
            'service'         => '.service.js',
            'config'          => '.config.js',
            'filter'          => '.filter.js',
            'pageView'        => '.page.html',
      ],
      'tests' => [
            'enable' => [
                'components'      => true,
                'services'        => true,
            ],
            'source' => [
                'root'            => 'tests/angular/',
                'components'      => 'admin/components',
                'services'        => 'services',
            ],
      ],
];
