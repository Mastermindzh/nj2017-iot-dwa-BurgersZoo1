FROM jetbrains/teamcity-minimal-agent:latest

MAINTAINER Kateryna Shlyakhovetska <shkate@jetbrains.com>

ARG GRADLE_VERSION=4.4

LABEL dockerImage.teamcity.version="latest" \
      dockerImage.teamcity.buildNumber="latest"

RUN apt-get update && \
    apt-get install -y software-properties-common && add-apt-repository ppa:openjdk-r/ppa && apt-get update && \
    apt-get install -y git mercurial openjdk-8-jdk apt-transport-https ca-certificates && \
    \
    apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 9DC858229FC7DD38854AE2D88D81803C0EBFCD88 && \
    echo "deb [arch=amd64] https://download.docker.com/linux/ubuntu xenial stable" > /etc/apt/sources.list.d/docker.list && \
    \
    apt-cache policy docker-ce && \
    apt-get update && \
    apt-get install -y docker-ce=17.06.0~ce-0~ubuntu && \
    systemctl disable docker && \
    \
    apt-get clean all && \
    \
    usermod -aG docker buildagent
	
# Install Gradle
RUN cd /usr/lib \
 && curl -fl https://downloads.gradle.org/distributions/gradle-${GRADLE_VERSION}-bin.zip -o gradle-bin.zip \
 && unzip "gradle-bin.zip" \
 && ln -s "/usr/lib/gradle-${GRADLE_VERSION}/bin/gradle" /usr/bin/gradle \
 && rm "gradle-bin.zip"
 
 ENV GRADLE_HOME /usr/lib/gradle-${GRADLE_VERSION}

COPY run-docker.sh /services/run-docker.sh