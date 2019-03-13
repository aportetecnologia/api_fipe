<?php
class ClassFipe{

    private $url;

    #Set url
    public function setUrl($url)
    {
        $this->url=file_get_contents($url);
    }

    #Return url
    public function getUrl()
    {
        return json_encode($this->url);
    }
}