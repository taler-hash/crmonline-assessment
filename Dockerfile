FROM php:8.2.0-apache
WORKDIR /var/www/html

# Copy custom Apache config
COPY config/000-default.conf /etc/apache2/sites-available/

# Enable mod_rewrite
RUN a2enmod rewrite

# Install dependencies
RUN apt-get update -y && apt-get install -y \
    libicu-dev \
    libmariadb-dev \
    unzip zip \
    zlib1g-dev \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    libpng-dev 

# Copy composer.phar
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Install PHP extensions
RUN docker-php-ext-install gettext intl pdo_mysql gd

# Configure GD extension
RUN docker-php-ext-configure gd --enable-gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) gd

# Clean up APT when done
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
