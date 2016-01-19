/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.github.ffremont.reviewer;

import io.undertow.Handlers;
import io.undertow.Undertow;
import io.undertow.server.handlers.resource.FileResourceManager;
import java.nio.file.Paths;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 *
 * @author florent
 */
public class Runner {

    public final static String DEFAULT_HOST = "localhost";
    public final static int DEFAULT_PORT = 8080;
    
    final static Logger LOGGER = LoggerFactory.getLogger(Runner.class);

    public static void main(final String[] args) {
        String host = System.getProperty("server.host") == null ? DEFAULT_HOST : System.getProperty("server.host");
        int port = System.getProperty("server.port") == null ? DEFAULT_PORT : Integer.valueOf(System.getProperty("server.port"));

        LOGGER.info("Démarrage du serveur {}:{}", host, port);
        
        FileResourceManager prm = new FileResourceManager(Paths.get("./www").toFile(), 1024);

        Undertow server = Undertow.builder()
                .addHttpListener(port, host)
                .setHandler(Handlers.resource(prm).setDirectoryListingEnabled(false)).build();

        server.start();
    }
}
