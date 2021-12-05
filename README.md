# concert-fe


# Installare gli strumenti necessari
```
sudo apt update
sudo apt install -y git
```

# Clonare il repository

```
git clone https://github.com/BlockchainLabItalia/concert-be.git
```

## Modificare le costanti nel File env.js 

<br>

Aprire il file [`_snowpack/env.js`](./_snowpack/env.js).  
Modificare il valore di *<dominio_nodo_api>* con il nome del dominio del server che espone le Api della [Blockchain](https://github.com/BlockchainLabItalia/concert-be#NODO_API):

```
export const MODE="production",NODE_ENV="production",SNOWPACK_PUBLIC_IPFS_API="https://<dominio_nodo_api>/",SNOWPACK_PUBLIC_WS_API="wss://<dominio_nodo_api>/ws",SNOWPACK_PUBLIC_KIND="concert",SNOWPACK_PUBLIC_APP_GENESIS_PASSPHRASE="peanut hundred pen hawk invite exclude brain chunk gadget wait wrong ready",SNOWPACK_PUBLIC_PAYPAL_CLIENT_ID="ThisStringIsJustForTest",SNOWPACK_PUBLIC_PUBLIC_PASSPHRASE="public",SNOWPACK_PUBLIC_REACT_APP_AUTH0_DOMAIN="con-cert.eu.auth0.com",SNOWPACK_PUBLIC_REACT_APP_AUTH0_CLIENT_ID="V0bul1pPfice8BDuU5q2MdxPGPdByzvP",SSR=!1;
```


> Questo nodo dovrà disporre di un certificato SSL.  
> In questo README è presente un esempio di configurazione con Apache.  

<br>

---
***
___ 

# **Installare e Configurare Apache**

```
sudo apt-get install apache2 
```
> Per ottenere un certificato gratuito con Let's Encrypt installare anche **certbot**

>```
> sudo apt install python3-certbot-apache
>```

### Configurare Virtual Host Apache  

<br>

Disabilitare configurazione di Default
```
sudo a2dissite 000-default.conf 
```
Creare un Symbolic Link della cartella concert-fe con la cartella *<nome_del_dominio>* in */var/www*:
```
sudo ln -s ~/concert-fe/* /var/www/<nome_del_dominio>/.
```
Creare nuovo File di Configurazione per *nome_del_dominio*
```
sudo nano /etc/apache2/sites-available/nome_del_dominio.conf
```
> sostituire *nome_del_dominio* con il dominio completo del server.  
> Es. /etc/apache2/sites-available/example.org.conf

Incollare la seguante configurazione di default, sostituendo i campi *<nome_del_dominio>* e *<email_amministratore>* con gli opportuni campi:

```
<VirtualHost *:80>
    
    ServerAdmin <email_amministratore>      
    ServerName <nome_del_dominio>
    ServerAlias www.<nome_del_dominio>

    DocumentRoot /var/www/<nome_del_dominio>
    
    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
    RewriteEngine on
    RewriteCond %{SERVER_NAME} =<nome_del_dominio> [OR]
    RewriteCond %{SERVER_NAME} =www.<nome_del_dominio>
    RewriteRule ^ https://%{SERVER_NAME}%{REQUEST_URI} [END,NE,R=permanent]

</VirtualHost>
```
Abilitare la nuova configurazione:
```
sudo a2ensite <nome_del_dominio>.conf 
```
Prima di procedere controllare la configurazione con:
```
sudo apache2ctl configtest
```
Riavviare apache
```
sudo systemctl restart apache2
```
<br>

> ### In caso si utilizzi let's encrypt per il certificato eseguire:
>```
> sudo certbot --apache -d nome_del_dominio
>```
> certbot creerà anche il nuovo file di Configurazione <nome_del_dominio>-le-ssl.conf  
> che sarà simile al file seguente:  
>```
><IfModule mod_ssl.c>
><VirtualHost *:443>
>    
>    ServerAdmin <email_amministratore>     
>    ServerName <nome_del_dominio>
>    ServerAlias www.<nome_del_dominio>
>    
>    DocumentRoot /var/www/<nome_del_dominio>
>    
>    ErrorLog ${APACHE_LOG_DIR}/error.log
>    CustomLog ${APACHE_LOG_DIR}/access.log combined
>
>    Include /etc/letsencrypt/options-ssl-apache.conf
>    SSLCertificateFile /etc/letsencrypt/live/<nome_del_dominio>/fullchain.pem
>    SSLCertificateKeyFile /etc/letsencrypt/live/<nome_del_dominio>/privkey.pem
></VirtualHost>
></IfModule>
>```  
> controllare la configurazione con:
>```
>sudo apache2ctl configtest
>```
>Riavviare apache
>```
>sudo systemctl restart apache2
>```

