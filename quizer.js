
      <script type="text/javascript">
        function loginHandler (session, message) {
            console.log('logged in ', session, message)
            console.log('Session = ', authx.getSession())
        }
        const authx = AuthX("5BwmMU9o9mI3LlPxsel7dZcfWE2OX7zBle64KSoz", {
            redirect_uri: "https://www.edusko.com/signin",
            locale: 'en',
            isSpa: true,
            onComplete: loginHandler,
            onError: function (error) {
                alert(error.message)
            }
        })

        function login() {
            authx.initiateSession()
        }
      </script>
      