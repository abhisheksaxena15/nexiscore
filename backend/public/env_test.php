<?php
echo "RESEND: " . (getenv('RESEND_API_KEY') ? "SET" : "EMPTY") . "\n";
echo "ENV RESEND: " . (isset($_ENV['RESEND_API_KEY']) ? "SET" : "EMPTY") . "\n";
