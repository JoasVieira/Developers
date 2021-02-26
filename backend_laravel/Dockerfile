FROM php:7.4-apache 
MAINTAINER Joás Vieira

RUN apt-get update -y

ENV APACHE_DOCUMENT_ROOT=/var/www/html/developer/public
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

RUN a2enmod rewrite

# Install unzip
RUN apt install unzip

# Install zip
RUN apt install zip

# Install npm
RUN apt install -y npm

# Install node
RUN apt install -y nodejs

#Install git
RUN apt-get install -y git

#Driver para conexão PDO mysql 
RUN docker-php-ext-install pdo_mysql

# Install composer
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
RUN php -r "if (hash_file('sha384', 'composer-setup.php') === '756890a4488ce9024fc62c56153228907f1545c228516cbf63f885e036d37e9a59d27d63f46af1d4d07ee0f76181c7d3') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
RUN php composer-setup.php --install-dir=/bin --filename=composer
RUN php -r "unlink('composer-setup.php');"

#Install laravel
RUN composer global require laravel/installer
RUN echo "export PATH=$PATH:$HOME/.composer/vendor/bin" >> ~/.bashrc

#xdebug 
RUN pecl install xdebug && docker-php-ext-enable xdebug
RUN echo "xdebug.remote_autostart = 1" >> "/usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini" \
&& echo "xdebug.remote_enable = 1" >> "/usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini" \
&& echo "xdebug.remote_port = 9000" >> "/usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini" \
&& echo "xdebug.remote_host = host.docker.internal" >> "/usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini" 

EXPOSE 25 

