import { withApiAuthRequired, getAccessToken } from '@authok/nextjs-authok';

export default withApiAuthRequired(async function orders(req, res) {
  try {
    const { accessToken } = await getAccessToken(req, res, {
      scopes: ['read:orders']
    });

    const baseURL =
      process.env.AUTHOK_BASE_URL?.indexOf('http') === 0
        ? process.env.AUTHOK_BASE_URL
        : `https://${process.env.AUTHOK_BASE_URL}`;

    // This is a contrived example, normally your external API would exist on another domain.
    const response = await fetch(baseURL + '/api/my/orders', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });

    const orders = await response.json();
    res.status(response.status || 200).json(orders);
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).json({
      code: error.code,
      error: error.message
    });
  }
});
